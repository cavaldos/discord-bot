import { Configuration, OpenAIApi } from "openai";

export const checkApiKey = async (apiKey) => {
  try {
    const configuration = new Configuration({
      apiKey: apiKey,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.listModels();

    console.log(response.data);

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
