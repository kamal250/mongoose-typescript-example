import { sessionToken } from "../models/session-token.model";

export class SessionTokenRepository {
    async updateToken (updatedToken?: string, userEmail?: string):Promise<boolean> {
        try {
            let isUpdated: boolean = false;
            let update = await sessionToken.findByIdAndUpdate(
                { email: userEmail },
                { token: updatedToken },
                { new: true }
            );
            isUpdated = (update?.token === updatedToken)?true:false;
            return isUpdated;            
        } catch (error) {
            throw new Error("Error: "+error);
        }
    }

}
