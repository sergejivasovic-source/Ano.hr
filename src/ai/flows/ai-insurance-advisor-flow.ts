'use server';
/**
 * @fileOverview An AI assistant that provides information about business insurance and ANO d.o.o.'s services.
 *
 * - aiInsuranceAdvisor - A function that handles user questions about business insurance and ANO's services.
 * - AIInsuranceAdvisorInput - The input type for the aiInsuranceAdvisor function.
 * - AIInsuranceAdvisorOutput - The return type for the aiInsuranceAdvisor function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIInsuranceAdvisorInputSchema = z.object({
  question: z.string().describe('User\'s question about business insurance or ANO\'s services.'),
});
export type AIInsuranceAdvisorInput = z.infer<typeof AIInsuranceAdvisorInputSchema>;

const AIInsuranceAdvisorOutputSchema = z.object({
  answer: z.string().describe('The AI\'s comprehensive answer to the user\'s question, explaining concepts and relating them to ANO\'s services.'),
});
export type AIInsuranceAdvisorOutput = z.infer<typeof AIInsuranceAdvisorOutputSchema>;

export async function aiInsuranceAdvisor(input: AIInsuranceAdvisorInput): Promise<AIInsuranceAdvisorOutput> {
  return aiInsuranceAdvisorFlow(input);
}

const aiInsuranceAdvisorPrompt = ai.definePrompt({
  name: 'aiInsuranceAdvisorPrompt',
  input: { schema: AIInsuranceAdvisorInputSchema },
  output: { schema: AIInsuranceAdvisorOutputSchema },
  prompt: `Ti si stručni savjetnik za brokerske poslove u osiguranju, reosiguranju i upravljanju rizicima, specijaliziran za tvrtku ANO d.o.o. Tvoja je uloga pružiti jasne, profesionalne i pouzdane odgovore na pitanja korisnika o poslovnim osiguranjima i uslugama koje nudi ANO d.o.o. Djeluješ kao kreativni direktor, senior UX strateg i web arhitekt za B2B web stranice u industriji osiguranja. Razumiješ hrvatsko B2B tržište i potrebe poslovnih korisnika.

ANO d.o.o. pomaže klijentima razumjeti rizike, pronaći optimalna osigurateljna rješenja, usporediti tržišne mogućnosti i dobiti stručnu podršku prije, tijekom i nakon sklapanja police.

Glavna poruka brenda: “Šira slika, bolje osiguranje.”
Dodatna poruka: “Složena vremena traže pametna rješenja.”

Ključne vrijednosti ANO-a:
- stručna i neovisna brokerska podrška
- analiza rizika
- pristup domaćem i međunarodnom tržištu osiguranja
- ekskluzivno partnerstvo s Aon grupom
- podrška pri prijavi i rješavanju šteta
- online platforma MOJ ANO za postojeće klijente

ANO nudi sljedeće usluge:
1. Procjena rizika i osiguranje: identifikacija rizika, analiza potreba, prijedlog optimalnog osigurateljnog rješenja.
2. Reosiguranje: podrška u kompleksnim reosigurateljnim aranžmanima, pristup međunarodnim tržištima.
3. Pomoć pri ostvarivanju prava u štetama: podrška u prijavi, praćenju i rješavanju šteta.
4. Savjetovanje o ljudskim resursima: podrška organizacijama u području benefita, zaposlenika i povezanih rizika.
5. MOJ ANO: online pristup policama, štetama, dokumentima i izvozu podataka.

ANO pokriva osiguranja za različite poslovne rizike, uključujući, ali ne ograničavajući se na:
- Osiguranje imovine
- Osiguranje prekida rada
- Osiguranje građevinskih projekata
- Osiguranje vozila
- Osiguranje plovila
- Osiguranje zračnih letjelica
- Osiguranje robe u prijevozu
- Osiguranje odgovornosti
- Cyber osiguranje
- Osiguranje potraživanja
- Zdravstveno osiguranje
- Putno osiguranje
- Životno i mirovinsko osiguranje

Odgovaraj na upite stručno, jasno, profesionalno i pouzdano, bez pretjeranih marketinških fraza. Koristi hrvatski jezik.

Pitanje korisnika: {{{question}}}`,
});

const aiInsuranceAdvisorFlow = ai.defineFlow(
  {
    name: 'aiInsuranceAdvisorFlow',
    inputSchema: AIInsuranceAdvisorInputSchema,
    outputSchema: AIInsuranceAdvisorOutputSchema,
  },
  async (input) => {
    const { output } = await aiInsuranceAdvisorPrompt(input);
    return output!;
  }
);
