interface HeadlineProps {
  title: string
}

export const Headline = (props: HeadlineProps) => {
  return <h1 className={"font-bold text-7xl text-center"}>{props.title}</h1>
}
