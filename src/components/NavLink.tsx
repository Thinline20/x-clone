import { JSX, Show } from "solid-js";
import { A } from "solid-start";

type NavLinkProps = {
  href: string;
  children: JSX.Element;
  title?: string;
};

export default (props: NavLinkProps) => {
  return (
    <A href={props.href}>
      <div class="flex items-center gap-2">
        <div class="h-10 w-10">
          <span>{props.children}</span>
        </div>
        <Show when={props.title}>
          <h2 class="text-xl">{props.title}</h2>
        </Show>
      </div>
    </A>
  );
};
