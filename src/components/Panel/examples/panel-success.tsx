import { Panel, PanelType } from "..";
import { ArrowForwardIcon } from "../../../icons/ArrowForwardIcon";

export default () => <>
  <Panel type={PanelType.Success} icon={() => <ArrowForwardIcon />}>
  Information has been successfully submitted
  </Panel>
</>
