import { Panel, PanelType } from "..";
import { CheckIcon } from "../../../icons/CheckIcon";

export default () => <>
  <Panel type={PanelType.Success} icon={() => <CheckIcon className="ons-svg-icon"/>}>
  Information has been successfully submitted
  </Panel>
</>
