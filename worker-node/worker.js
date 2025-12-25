import axios from 'axios';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function run() {
  const res = await axios.get(${process.env.LARAVEL_API}/articles);
  const article = res.data[0];

  if (!article) {
    console.log('No article found');
    return;
  }

  const prompt = \
Rewrite the following article in a clearer and well-structured way.
Add a References section at the bottom.

Original Article:
\
\;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });

  await axios.post(${process.env.LARAVEL_API}/articles, {
    title: article.title + ' (Updated)',
    content: completion.choices[0].message.content,
    is_generated: true,
  });

  console.log('Updated article published');
}

run();
