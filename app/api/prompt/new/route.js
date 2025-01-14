import { isConnected, connectToDB } from "@utils/database";
import Prompt from '@models/prompt';

export const POST = async (req , res) => {
  const {userId, prompt, tag} = await req.json();
  try {
    await connectToDB();
    // console.log({userId, prompt, tag});
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    newPrompt.save();

    return new Response(JSON.stringify(newPrompt) , {status: 201});
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), {status: 500});
  }
}