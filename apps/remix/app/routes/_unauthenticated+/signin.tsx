import { LoaderFunction, redirect } from "@remix-run/node";

export let loader: LoaderFunction = async () => {
  return redirect("/auth/azure-ad");
};

export default function Signin() {
  return null;
}
