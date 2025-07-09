import { requireNativeModule } from "expo-modules-core";

import { DeveloperOptionsCheckerModuleType } from "./DeveloperOptionsChecker.types";

export default requireNativeModule<DeveloperOptionsCheckerModuleType>(
  "DeveloperOptionsChecker"
);
