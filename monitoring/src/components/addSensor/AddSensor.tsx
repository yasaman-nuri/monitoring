import { useForm } from "react-hook-form";
import type { SensorProps } from "../../models/SensorModel";
import { addSensor } from "../../state-management/sensorSlice";
import { useDispatch } from "react-redux";

const AddSensor = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<SensorProps>();
  const insert = (newSensor: SensorProps) => {
    dispatch(addSensor(newSensor));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(insert)}>
        <div>
          <label>شناسه سنسور</label>
          <input type="text" {...register("id")} />
        </div>
        <div>
          <label>نام سنسور</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label>واحد</label>
          <input type="text" {...register("unit")} />
        </div>
        <div>
          <label>مقدار</label>
          <input type="text" {...register("value")} />
        </div>
        <div>
          <button type="submit">ثبت</button>
        </div>
      </form>
    </div>
  );
};

export default AddSensor;
