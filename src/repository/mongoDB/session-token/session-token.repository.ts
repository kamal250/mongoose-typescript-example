import { sessionToken } from "../models/session-token.model";
import { iSessionTokenDocument } from "../documents/session-token.document";

export class SessionTokenRepository {
  async insertToken(
    session: iSessionTokenDocument,
    token: String
  ): Promise<boolean> {
    let newToken = new sessionToken({
      email: session.email,
      token: token
    });
    let savedSession = await newToken.save();
    return (savedSession.id)?true:false;
  }

  async updateToken(
    updatedToken?: string,
    userEmail?: string
  ): Promise<boolean> {
    try {
      let isUpdated: boolean = false;
      let update = await sessionToken.findOneAndUpdate(
        { email: userEmail },
        { token: updatedToken },
        { new: true }
      );
      isUpdated = update?.token === updatedToken ? true : false;
      return isUpdated;
    } catch (error) {
      throw new Error("Error: " + error);
    }
  }
}
