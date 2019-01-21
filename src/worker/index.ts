export class WebWorkerFactory {
  constructor(worker: any) {
    const code = worker.toString();
    const blob = new Blob(['('+code+')()']);
    // TODO: handle if window.Worker not exists.
    return new Worker(URL.createObjectURL(blob));
  }
}