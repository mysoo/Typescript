// jQuery 타입 직접 만들어보기
interface zQuery1<T> {
  text(
    param?:
      | string
      | number
      | boolean
      | ((this: T, param: number) => string | number | boolean)
  ): void;
  html(param: string | Document | DocumentFragment): void;
}

const $tag1: zQuery1<HTMLElement> = $([
  "p",
  "t",
]) as unknown as zQuery1<HTMLElement>;

$tag1.text("123");
$tag1.text(123);
$tag1.text(function (index) {
  console.log(this, index);
  return true;
});

$tag1.text().html(document); //method chaining => return 값이 this면 된다.

const tag1 = $("ul li")
  .addClass("hello")
  .addClass(function (index) {
    return "item-" + index;
  });

$(tag1).html(document);
