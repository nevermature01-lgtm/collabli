'use server';
/**
 * @fileOverview An AI copy assistant that generates engaging and premium marketing copy options for landing page sections.
 *
 * - generateLandingPageMarketingCopy - A function that handles the marketing copy generation process.
 * - GenerateLandingPageMarketingCopyInput - The input type for the generateLandingPageMarketingCopy function.
 * - GenerateLandingPageMarketingCopyOutput - The return type for the generateLandingPageMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLandingPageMarketingCopyInputSchema = z.object({
  sectionDescription: z
    .string()
    .describe(
      'A description of the landing page section or overall purpose for which copy is needed.'
    ),
  copyType: z
    .array(z.enum(['headline', 'subheading', 'cta']))
    .describe(
      'The type(s) of copy to generate. Can be one or more of headline, subheading, or cta.'
    )
    .default(['headline', 'subheading', 'cta']),
  numSuggestions: z
    .number()
    .int()
    .min(1)
    .max(5)
    .describe('The number of suggestions to generate for each copy type.')
    .default(3),
});
export type GenerateLandingPageMarketingCopyInput = z.infer<
  typeof GenerateLandingPageMarketingCopyInputSchema
>;

const GenerateLandingPageMarketingCopyOutputSchema = z.object({
  headlines: z.array(z.string()).optional().describe('Suggested headlines.'),
  subheadings: z.array(z.string()).optional().describe('Suggested subheadings.'),
  ctas: z.array(z.string()).optional().describe('Suggested Call-to-Action texts.'),
});
export type GenerateLandingPageMarketingCopyOutput = z.infer<
  typeof GenerateLandingPageMarketingCopyOutputSchema
>;

export async function generateLandingPageMarketingCopy(
  input: GenerateLandingPageMarketingCopyInput
): Promise<GenerateLandingPageMarketingCopyOutput> {
  return generateLandingPageMarketingCopyFlow(input);
}

const marketingCopyPrompt = ai.definePrompt({
  name: 'generateLandingPageMarketingCopyPrompt',
  input: {schema: GenerateLandingPageMarketingCopyInputSchema},
  output: {schema: GenerateLandingPageMarketingCopyOutputSchema},
  prompt: `You are an AI marketing copy assistant specialized in creating engaging and premium-style text for modern SaaS landing pages.

Generate marketing copy options based on the following description and requirements:

Landing Page Section Description: {{{sectionDescription}}}

I need {{numSuggestions}} distinct options for the following copy types:

{{#each copyType}}
- {{{this}}}
{{/each}}

Focus on a high-end, clean SaaS aesthetic. The copy should be concise, impactful, and persuasive.

Ensure the output is a JSON object with keys 'headlines', 'subheadings', and 'ctas' containing arrays of strings, only including the copy types explicitly requested. If a copy type is not requested, omit its key from the output.

Example Output (if 'headline' and 'cta' were requested):
{
  "headlines": [
    "Elevate Your Workflow",
    "Unleash Productivity",
    "Simplify & Succeed"
  ],
  "ctas": [
    "Start Free Trial",
    "Get Started Now",
    "Explore Features"
  ]
}

Begin generating the copy now.`,
});

const generateLandingPageMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateLandingPageMarketingCopyFlow',
    inputSchema: GenerateLandingPageMarketingCopyInputSchema,
    outputSchema: GenerateLandingPageMarketingCopyOutputSchema,
  },
  async input => {
    const {output} = await marketingCopyPrompt(input);
    return output!;
  }
);
