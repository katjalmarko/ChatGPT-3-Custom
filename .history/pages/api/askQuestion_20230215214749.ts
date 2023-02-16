// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi';
import admin from "firebase-admin"
import { adminDb } from '../../firebaseAdmin';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const { prompt, chatId, model, session } =req.body;

    if (!prompt) {
      res.status(400).json({ answer: "Please provide a prompt!" }); 
      return;
    }

    if (!chatId) {
      res.status(400).json({answer: "Please provide a valid chat ID!"});
      return;
    }

    // ChatGPT query
    const response = await query(prompt, chatId, model)

    const message: Message = {
      text: response || "ChatGPT was unable to find an answer for that!",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        avatar: "https://cdn.vox-cdn.com/thumbor/AhMKtXCq37T2-zlrZMpaO59AB2k=/0x0:1820x1213/1200x628/filters:focal(910x607:911x608)/cdn.vox-cdn.com/uploads/chorus_asset/file/24247717/lp_logo_3.0.jpg",
      },
    };

    await adminDb
      .collection('users')
      .doc(session?.user?.email)
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .add(message);

  res.status(200).json({ answer: message.text })
}
