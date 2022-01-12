jest.mock("scheduler", () => require("scheduler/unstable_mock"));

import ReactThreeTestRenderer from "@react-three/test-renderer";
import Cubes from "../components/Cubes";

test("render empty scene", async () => {
  const renderer = await ReactThreeTestRenderer.create();

  expect(renderer.scene.children.length).toEqual(0);
});

test("render cubes correctly", async () => {
  const renderer = await ReactThreeTestRenderer.create(<Cubes />);

  console.log("Scene = ", renderer.scene.children[0].children);

  expect(renderer.scene.children.length).toEqual(1);
  expect(renderer.scene.children[0].type).toEqual("Group");
  expect(renderer.scene.children[0].children.length).toEqual(1);
  expect(renderer.scene.children[0].children[0].type).toEqual("Mesh");
});
