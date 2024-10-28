// components/MyTooltipComponent.tsx
import * as Tooltip from '@radix-ui/react-tooltip';
import { Button } from "@/components/ui/button";

const MyTooltipComponent = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button onClick={() => {}}>Hover me</Button> {/* Added onClick prop */}
        </Tooltip.Trigger>
        <Tooltip.Content>
          <p>This is a tooltip!</p>
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default MyTooltipComponent;
