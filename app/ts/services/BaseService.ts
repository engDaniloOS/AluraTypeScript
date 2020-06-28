export abstract class BaseService{

    protected isResponseOk(response: Response): Response{
        if (response.ok) return response;

        throw new Error(response.statusText);
    }
}