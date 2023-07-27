import { Hydrate as HydrateBoundary } from "@tanstack/react-query";

type HydrateProps = {
  children: React.ReactNode;
  state: any;
};
export default function Hydrate(props: HydrateProps) {
  return <HydrateBoundary {...props} />;
}
