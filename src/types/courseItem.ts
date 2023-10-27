abstract class CourseItem {
  constructor(public title: string) {}
}

class Lesson extends CourseItem {
  private _content: string;
  private _desc?: string;
  private _resources?: string[];

  constructor(
    title: string,
    content: string,
    desc?: string,
    resources: string[] = []
  ) {
    super(title);
    this._content = content;
    this._desc = desc;
    this._resources = resources;
  }


  get content(): string {
    return this._content;
  }

  set content(content: string) {
    this._content = content;
  }

  get desc(): string | undefined {
    return this._desc;
  }

  set desc(desc: string | undefined) {
    this._desc = desc;
  }

  get resources(): string[] | undefined {
    return this._resources;
  }

  set resources(resources: string[]) {
    this._resources = resources;
  }
}

class Test extends CourseItem {
  private _testTopic: string;
  private _date: string;

  constructor(title: string, testTopic: string, date: string) {
    super(title);
    this._testTopic = testTopic;
    this._date = date;
  }

  get testTopic(): string {
    return this._testTopic;
  }

  set testTopic(testTopic: string) {
    this._testTopic = testTopic;
  }

  get date(): string {
    return this._date;
  }

  set date(date: string) {
    this._date = date;
  }
}


export {CourseItem, Lesson, Test};