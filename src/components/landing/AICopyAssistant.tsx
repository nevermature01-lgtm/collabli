"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { generateLandingPageMarketingCopy } from '@/ai/flows/generate-landing-page-marketing-copy';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const AICopyAssistant: React.FC = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    headlines?: string[];
    subheadings?: string[];
    ctas?: string[];
  } | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!description.trim()) {
      toast({ title: "Error", description: "Please enter a description for your section." });
      return;
    }

    setLoading(true);
    try {
      const data = await generateLandingPageMarketingCopy({
        sectionDescription: description,
        copyType: ['headline', 'subheading', 'cta'],
        numSuggestions: 3,
      });
      setResults(data);
    } catch (error) {
      toast({ title: "Generation failed", description: "Failed to generate copy. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
    toast({ title: "Copied!", description: "Text copied to clipboard." });
  };

  return (
    <section id="ai-assistant" className="py-16 md:py-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">AI Copy Assistant</h2>
            <p className="text-muted-foreground">Generate premium marketing copy for your Collabli site.</p>
          </div>
        </div>

        <Card className="border-border shadow-soft mb-8">
          <CardHeader>
            <CardTitle className="text-lg">What section are you building?</CardTitle>
            <CardDescription>Describe your feature or product goals to get tailored copy suggestions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description">Section Description</Label>
              <Input 
                id="description"
                placeholder="e.g., A feature section about real-time collaboration for remote designers"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleGenerate} disabled={loading} className="w-full">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
              {loading ? 'Generating Suggestions...' : 'Generate Marketing Copy'}
            </Button>
          </CardFooter>
        </Card>

        {results && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Headlines */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground px-2">Headlines</h3>
              {results.headlines?.map((item, idx) => (
                <div key={idx} className="group relative bg-white p-4 rounded-xl border border-border shadow-sm hover:border-primary/50 transition-all">
                  <p className="text-sm font-medium pr-8">{item}</p>
                  <button 
                    onClick={() => copyToClipboard(item, `h-${idx}`)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                  >
                    {copiedIndex === `h-${idx}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>

            {/* Subheadings */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground px-2">Subheadings</h3>
              {results.subheadings?.map((item, idx) => (
                <div key={idx} className="group relative bg-white p-4 rounded-xl border border-border shadow-sm hover:border-primary/50 transition-all">
                  <p className="text-sm text-muted-foreground pr-8">{item}</p>
                  <button 
                    onClick={() => copyToClipboard(item, `s-${idx}`)}
                    className="absolute right-2 top-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                  >
                    {copiedIndex === `s-${idx}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground px-2">Calls to Action</h3>
              {results.ctas?.map((item, idx) => (
                <div key={idx} className="group relative bg-white p-4 rounded-xl border border-border shadow-sm hover:border-primary/50 transition-all">
                  <p className="text-sm font-bold pr-8">{item}</p>
                  <button 
                    onClick={() => copyToClipboard(item, `c-${idx}`)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                  >
                    {copiedIndex === `c-${idx}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
