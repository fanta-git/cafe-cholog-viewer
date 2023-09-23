const REPOSITORY = process.env.GITHUB_REPOSITORY ?? "";
const [userName, repositoryName] = REPOSITORY.split("/");

export const REPOSITORY_URL = `https://github.com/${REPOSITORY}`;
export const SITE_NAME = "KiiteCafe超履歴ビューア";
export const DESCRIPTION = "説明文";
export const SITE_URL = `https://${userName}.github.io/${repositoryName}`;
export const IMG_URL = `${SITE_URL}/ogp.png`;
