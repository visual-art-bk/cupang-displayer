import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";
import CupangProdDisplayer from "@/components/CupangProdDisplayer/CupangProdDisplayer";
const rootId = "editRootCupangDisplay";
const rootElement = document.getElementById(rootId);

if (rootElement === null) {
  throw new Error("해당 id를 참조한 엘리멘터 값이 null입니다. id: " + rootId);
}
createRoot(rootElement).render(<App></App>);

export default function App() {
  return (
    <RecoilRoot>
      <CupangProdDisplayer
        isEditMode={true}
        serverEnv="PRODUCTION"
      ></CupangProdDisplayer>
    </RecoilRoot>
  );
}
