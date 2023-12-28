import { DefaultPageComponent, MenuCard, MenuGrid } from "@manifold/sharedui"


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
