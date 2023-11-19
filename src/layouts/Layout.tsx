import { OcHomefill3 } from "solid-icons/oc";
import { JSX } from "solid-js";
import LogoSvg from "~/assets/logo.svg";
import Logo from "~/components/Logo";
import NavLink from "~/components/NavLink";

type LayoutProps = {
  title?: string;
  children: JSX.Element;
};

export default (props: LayoutProps) => {
  return (
    <div id="app" class="bg-black w-screen h-screen">
      <div class="container mx-auto flex">
        <div>
          <nav>
            <ul>
              <li>
                <NavLink href="/" title="logo">
                  <Logo />
                </NavLink>
              </li>
              <li>
                <NavLink href="/home" title="Home">
                  <OcHomefill3 />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {props.children}
        <div>nav2</div>
      </div>
    </div>
  );
};
