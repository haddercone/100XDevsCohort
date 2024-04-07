import {createClient} from 'redis';

const client = createClient();

async function processSubmission(submission:string) {
    const { problemId } = JSON.parse(submission);
    console.log(submission);

    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Finished processing submission for problemId ${problemId}.`);
}

async function startWorker() {

    try {
        await client.connect();
        console.log("Worker connected to Redis.");

        // Main loop
        while (true) {
            try {
                const submission = await client.brPop("problems", 0);
                
                // @ts-ignore
                await processSubmission(submission.element);
            } catch (error) {
                console.error("Error processing submission:", error);

            }
        }
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

startWorker();