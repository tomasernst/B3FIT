import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: false },
});

export const MemberModel = mongoose.model("Member", MemberSchema);

export const createMember = (values: Record<string, any>) =>
    new MemberModel(values).save().then((member) => member.toObject());
export const getMembers = () => MemberModel.find();
export const deleteMemberById = (id: string) => MemberModel.findOneAndDelete({ _id: id });
