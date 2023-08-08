import ProjectsData from "../../../components/ProjectsData";

export default function handler(req, res) {
  res.status(200).json(ProjectsData);
}
