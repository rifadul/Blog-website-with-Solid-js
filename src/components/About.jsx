import { useParams } from "@solidjs/router";


const About = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>About {params.id}</div>
  )
}

export default About;