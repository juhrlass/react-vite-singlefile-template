import { DefaultPageComponent } from "../../../../../../packages/sharedui/components/ui/DefaultPageComponent.tsx"
import { MenuCard } from "../../../../../../packages/sharedui/components/ui/MenuCard.tsx"
import { MenuGrid } from "../../../../../../packages/sharedui/components/ui/MenuGrid.tsx"

export const StartStartPage = () => {
  return (
    <DefaultPageComponent showBackButton={false}>
      <MenuGrid>
        <MenuCard to={"winterStartPage"} title={"Menu 1"} />

        <MenuCard to={"winterStartPage"} title={"Menu 2"} />
      </MenuGrid>
    </DefaultPageComponent>
  )
}
