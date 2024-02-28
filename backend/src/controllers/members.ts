import express from 'express';

export const addMember = async (req: express.Request, res: express.Response) => {
    try {
        const { name, email, phone } = req.body;

        if (!name) {
            return res.sendStatus(400);
        }

        // Finish adding member

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
