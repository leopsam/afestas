import { Requests } from "./../../node_modules/.prisma/client";
import requestRepositories from "./../repositories/request-repository";

export async function postCreateRequest({
  userId,
  description,
  themeId,
  serviceTypeId,
}: CreateRequestParams): Promise<Requests> {
  const createRequest = requestRepositories.createRequest({
    userId,
    description,
    themeId,
    serviceTypeId,
  });

  if (!createRequest) throw new Error("Unable to register request");

  return createRequest;
}

export type CreateRequestParams = Pick<
  Requests,
  "userId" | "description" | "themeId" | "serviceTypeId"
>;

export default {
  postCreateRequest,
};
