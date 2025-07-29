import { useDispatch } from "react-redux";
// import type { RootState } from "../../state-management/store";
import { useForm } from "react-hook-form";
import type { SensorProps } from "../../models/SensorModel";
import { editSensor } from "../../state-management/sensorSlice";
interface sensorToEditProps {
  sensorToEdit: SensorProps;
}
const EditSensor = ({ sensorToEdit }: sensorToEditProps) => {
  //   const sensors = useSelector((state: RootState) => state.sensorData.items);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<SensorProps>();
  const handleSubmitt = (data: SensorProps) => {
    dispatch(editSensor(data));
  };

  return (
    <div>
        {JSON.stringify(sensorToEdit)}
      <form onSubmit={handleSubmit(handleSubmitt)}>
        <div>
          <label>شناسه سنسور</label>
          <input
            type="text"
            {...register("id")}
            defaultValue={sensorToEdit.id}
          />
        </div>
        <div>
          <label>نام سنسور</label>
          <input
            type="text"
            {...register("name")}
            defaultValue={sensorToEdit.name}
          />
        </div>
        <div>
          <label>واحد</label>
          <input
            type="text"
            {...register("unit")}
            defaultValue={sensorToEdit.unit}
          />
        </div>
        <div>
          <label>مقدار</label>
          <input
            type="text"
            {...register("value")}
            defaultValue={sensorToEdit.value}
          />
        </div>
        <div>
          <button type="submit">ذخیره</button>
          <button type="submit">انصراف</button>
        </div>
      </form>
    </div>
  );
};

export default EditSensor;
