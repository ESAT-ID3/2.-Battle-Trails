import ForgeInput from "@pages/forge/forge-input/forge-input.tsx";
import {usePostStore} from "@/store/usePostStore.ts";
import ForgeMap from "@pages/forge/forge-map/forge-map.tsx";

type Props = {
  onRemoveWaypoint: (index: number) => void;
};

const ForgeForm = ( { onRemoveWaypoint }: Props) => {
  const {postDraft, setPostField} = usePostStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPostField(name as keyof typeof postDraft, value);
  };

  return (
    <form className="space-y-4">
      <ForgeInput
        label="Título de la ruta"
        name="title"
        placeholder="Ej: Ruta del frente del Ebro"
        value={postDraft.title}
        onChange={handleChange}
      />

      {/* Destino*/}
      <ForgeMap onRemoveWaypoint={onRemoveWaypoint}/>

      {/*<ForgeInput
        label="Distancia"
        name="distance"
        placeholder="Calculada automáticamente"
        value={postDraft.distance || ""}
        onChange={() => {
        }} // opcional: no hace nada
        disabled
      />*/}

      <ForgeInput
        label="Descripción"
        name="description"
        placeholder="Breve descripción de la ruta"
        value={postDraft.description}
        onChange={handleChange}
        textarea
        maxLength={400}
        rows={4}
      />


    </form>
  );
};

export default ForgeForm;
