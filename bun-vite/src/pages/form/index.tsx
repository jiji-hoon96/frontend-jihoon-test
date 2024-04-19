import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputGroup from "../../components/InputGroup";
import { RegisterSchemaType, registerSchema } from "../../schema/register";

const FormTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) =>
    console.log(data);

  return (
    <div>
      <h1>react-hook-form 이랑 zod 연습</h1>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-notoSansKr text-xl font-bold mb-[24px]">
          회원 정보 입력
        </h3>

        <InputGroup
          id="email"
          label="이메일"
          placeholder="@이하 주소까지 모두 입력"
          errorMessage={errors.email?.message}
          {...register("email")}
        />

        <InputGroup
          id="userId"
          autoComplete="false"
          label="아이디"
          placeholder="영문 소문자 또는 영문+숫자 조합 4~30자리"
          errorMessage={errors.userId?.message}
          {...register("userId")}
        />

        <InputGroup
          id="password"
          label="비밀번호"
          type="password"
          autoComplete="false"
          placeholder={"영문+숫자+특수문자 조합 8~15자리"}
          errorMessage={errors.password?.message}
          {...register("password")}
        />

        <InputGroup
          id="passwordCheck"
          label="비밀번호 확인"
          type="password"
          autoComplete="false"
          placeholder={"비밀번호 확인"}
          errorMessage={errors.passwordCheck?.message}
          {...register("passwordCheck")}
        />

        <InputGroup
          id="recommendationCode"
          label="추천코드"
          placeholder={"추천코드 입력"}
          errorMessage={errors.recommendationCode?.message}
          required={false}
          {...register("recommendationCode")}
        />

        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default FormTest;
