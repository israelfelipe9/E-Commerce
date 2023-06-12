import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import styled from "styled-components";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/common/button";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as services from "../../data/fakeProductService";

const recommendSchema = zod.object({
  brand: zod.string().min(0).max(50).nonempty().trim(),
  format: zod.string().min(3).max(50).nonempty().trim(),
  color: zod.string().min(3).max(50).nonempty().trim(),
});

type RecommendSchemaType = zod.infer<typeof recommendSchema>;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const RecommendForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecommendSchemaType>({
    resolver: zodResolver(recommendSchema),
  });

  const [data, setData] = useState<services.IProducts | undefined>(undefined);

  const handleSubmitForm = (payload) => {
    console.log(payload);
    setData(services.getMovie(1));
  };

  return (
    <Wrapper>
      {!data && (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
          <h1>Recommendation</h1>
          <Input
            placeholder="Ray-Ban"
            label="Brand:"
            error={errors.brand?.message}
            {...register("brand")}
          />
          <Input
            placeholder="Circular"
            label="Format:"
            error={errors.format?.message}
            {...register("format")}
          />
          <Input
            placeholder="Black"
            label="Color:"
            error={errors.color?.message}
            {...register("color")}
          />
          <button>Recommend</button>
        </Form>
      )}

      {data && (
        <div className="container mb-50">
          <h1>Recommended for you!</h1>
          <h2>{data.name}</h2>
          <h3>{data.brand}</h3>
          <img
            src={data.photo[0].url}
            className="img-card img-fluid"
            width="340"
            height="350"
            alt={data.name}
          />
          <Button type="button" className="btn btn-sm mt-2 btn-sm">
            <Link to={`/sale/${data._id}`}>
              {" "}
              <FontAwesomeIcon icon={faMagnifyingGlass} /> View Product
            </Link>
          </Button>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;
