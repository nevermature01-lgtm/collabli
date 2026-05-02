'use server';
/**
 * @fileOverview A Genkit flow for generating compelling and concise product feature descriptions.
 *
 * - generateProductFeatureDescription - A function that handles the generation of product feature descriptions.
 * - GenerateProductFeatureDescriptionInput - The input type for the generateProductFeatureDescription function.
 * - GenerateProductFeatureDescriptionOutput - The return type for the generateProductFeatureDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductFeatureDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  featureName: z.string().describe('The name of the feature to describe.'),
  keyBenefits: z
    .array(z.string())
    .describe('A list of key benefits this feature provides to the user.'),
  targetAudience: z
    .string()
    .optional()
    .describe(
      'The specific target audience for whom this feature is most relevant.'
    ),
});
export type GenerateProductFeatureDescriptionInput = z.infer<
  typeof GenerateProductFeatureDescriptionInputSchema
>;

const GenerateProductFeatureDescriptionOutputSchema = z.object({
  description: z.string().describe('A compelling and concise feature description.'),
});
export type GenerateProductFeatureDescriptionOutput = z.infer<
  typeof GenerateProductFeatureDescriptionOutputSchema
>;

export async function generateProductFeatureDescription(
  input: GenerateProductFeatureDescriptionInput
): Promise<GenerateProductFeatureDescriptionOutput> {
  return generateProductFeatureDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductFeatureDescriptionPrompt',
  input: {schema: GenerateProductFeatureDescriptionInputSchema},
  output: {schema: GenerateProductFeatureDescriptionOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in creating compelling and concise product feature descriptions for SaaS landing pages.

Your goal is to clearly communicate the value of a feature for a product to its target audience.

Product Name: {{{productName}}}
Feature Name: {{{featureName}}}
Key Benefits: {{{#each keyBenefits}}}- {{{this}}}\n{{{/each}}}

{{#if targetAudience}}
Target Audience: {{{targetAudience}}}

Consider the target audience and focus on the most impactful benefits.
{{/if}}

Write a compelling and concise description (2-3 sentences) for the '{{{featureName}}}' feature of '{{{productName}}}'. Highlight how it directly benefits the user, using clear and engaging language suitable for a high-end SaaS landing page.`,
});

const generateProductFeatureDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductFeatureDescriptionFlow',
    inputSchema: GenerateProductFeatureDescriptionInputSchema,
    outputSchema: GenerateProductFeatureDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
