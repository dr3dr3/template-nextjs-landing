import { createInstance } from "@featurevisor/sdk";

const DATAFILE_URL = 'https://dr3dr3.github.io/template-featurevisor/datafiles/ci/datafile-tag-all.json';

let instance;

export async function getInstance() {
  if (instance) {
    return instance;
  }

  const f = createInstance({
    datafileUrl: DATAFILE_URL,
  });

  instance = await f.onReady();

  return instance;
}