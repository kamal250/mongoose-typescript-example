import { Document } from "mongoose";

interface iSessionTokenDocument extends Document {
  token: string;
  email: string;
}

export { iSessionTokenDocument };
