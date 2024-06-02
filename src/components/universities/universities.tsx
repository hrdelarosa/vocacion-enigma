import { fetchUniversidades } from "@/lib/data";
import ContentUniversities from "./content";

export default async function Universities() {
  const universidades = await fetchUniversidades()
  
  return <ContentUniversities universidades={universidades} />;
}
