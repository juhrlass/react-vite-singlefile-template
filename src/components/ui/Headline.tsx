interface HeadlineProps {
  title: string
}

export const Headline = (props: HeadlineProps) => {
  return <h1 className={"text-center text-7xl font-bold"}>{props.title}</h1>
}
