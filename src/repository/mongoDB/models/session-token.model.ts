import { model, Model } from "mongoose";
import { iSessionTokenDocument } from "../documents/session-token.document";
import { sessionTokenSchema } from "../schemas/session-token.schema";

const sessionToken = model<iSessionTokenDocument>('SessionToken', sessionTokenSchema);

export {
    sessionToken
}
