import { ErrorResult, ProductionSuccessResult } from "../../src/deploy";

export const commitId = "fe211ff";

export const channelError: ErrorResult = {
  status: "error",
  error:
    "HTTP Error: 400, Channel IDs can only include letters, numbers, underscores, hyphens, and periods.",
};

export const liveDeploySingleSiteSuccess: ProductionSuccessResult = {
  status: "success",
  result: {
    hosting: "sites/jeff-test-699d3/versions/7aebddc461b66922",
  },
};

export const liveDeployMultiSiteSuccess: ProductionSuccessResult = {
  status: "success",
  result: {
    hosting: [
      "sites/action-hosting-deploy-demo/versions/cd71a5c43ba0921b",
      "sites/action-hosting-deploy-demo-2/versions/e843c071a09cecbf",
    ],
  },
};
