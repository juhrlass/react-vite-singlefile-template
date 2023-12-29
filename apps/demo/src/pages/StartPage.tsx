import { DefaultPageComponent, MenuCard, MenuGrid } from "@manifold/sharedui"


export const StartPage = () => {
  return (
    <DefaultPageComponent className={"bg-black"} showBackButton={false}>
      <MenuGrid>
        <MenuCard to={"winter"} title={"Winter"} />

        <MenuCard to={"winterStartPage"} title={"Menu 2"} />
      </MenuGrid>
    </DefaultPageComponent>
  )
}
