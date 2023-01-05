import nc from "next-connect";
import subscription from "../../Backend/controller/subscription";

const handler = nc();

// POST request  ===> Execute subscription function
handler.post(subscription);

export default handler;
