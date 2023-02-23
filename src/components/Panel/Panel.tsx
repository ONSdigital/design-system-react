import classNames from "classnames";
import { ArrowForwardIcon } from "../../icons/ArrowForwardIcon";

/**
 * Defines the types of panels available.
 */
export enum PanelType {
  Information = "info",
  Success = "success",
  Warning = "warn",
  Error = "error",
  Announcement = "announcement",
}

/**
 * Properties for the `Panel` component.
 */
export interface PanelProps {
  /**
   * Indicates the type of panel.
   *
   * @defaultValue `PanelType.Information`
   */
  type?: PanelType;

  /**
   * Text that describes the panel for screen readers and other assistive technologies.
   */
  assistiveText?: string;

  /**
   *  Icon to be added to the panel
   */
  icon?: () => JSX.Element;

  /**
   * The content to display inside the panel.
   */
  children: any;
}

/**
 * Defines the default assistive text for each panel type.
 */
const ASSISTIVE_TEXT_DEFAULTS = new Map<PanelType, string>([
  [PanelType.Information, "Important information:"],
  [PanelType.Success, "Completed:"],
  [PanelType.Warning, "Warning:"],
  [PanelType.Error, "Error:"],
  [PanelType.Announcement, "Announcement:"],
]);

const ICON_LOOKUP_MAP = new Map<PanelType, any>([
  [PanelType.Announcement, () => <ArrowForwardIcon />],
  [PanelType.Warning, () => <>!</>],
]);

/**
 * Displays information to the user.
 *
 * @param props The properties of the `Panel` component.
 * @returns The `Panel` component.
 */
export function Panel(props: PanelProps): JSX.Element {
  const type = props.type ?? PanelType.Information;
  const Icon = props.icon ?? ICON_LOOKUP_MAP.get(type);
  const assistiveText = props.assistiveText ?? ASSISTIVE_TEXT_DEFAULTS.get(type);

  const classes = classNames("ons-panel", {
    [`ons-panel--${type}`]: true,
  });

  return (
    <div className={classes}>
      {Icon !== undefined && (
        <div className="ons-panel__icon" aria-hidden="true">
          <Icon />
        </div>
      )}
      {assistiveText && (
        <span className="ons-panel__assistive-text ons-u-vh">
          {assistiveText}
        </span>
      )}
      <div className="ons-panel__body">{props.children}</div>
    </div>
  );
}
