import draw2d, { Figure } from 'draw2d';
import Placement from "@/domain/diagram/placement/Placement";
import Company from "@/domain/company/Company";
import TopLeftLocator from "@/presentation/draw2d/custom/TopLeftLocator";

export default class CompanyIconGenerator {
    public generate(companyPlacement: Placement, company: Company, iconStyle: CSSStyleDeclaration): Figure {
        const padding = 0;
        const id = String(companyPlacement.resourceId);

        const waku = new draw2d.shape.basic.Rectangle({
            x: companyPlacement.x,
            y: companyPlacement.y,
            bgColor: "#FFFFFF",
            alpha: 0.6, // opacityと一緒
            width: companyPlacement.width,
            height: companyPlacement.height,
            radius: 5,
            stroke: 3,
            selectable: true,
            resizable: true,
            color: "#000000",
            padding: padding,
            keepAspectRatio: false,
            id: id
        });

        const icon = new draw2d.shape.basic.Label({
            fontFamily: iconStyle.fontFamily,
            text: iconStyle.content.replace(/"/g, ""),
            fontSize: 30,
            stroke: 0,
            padding: padding,
            bgColor: "#FFFFFF",
            alpha: 1 // opacityと一緒
        });

        const name = new draw2d.shape.basic.Label({
            text: company.name,
            stroke: 0,
            padding: padding,
            resizable: false,
            selectable: false
        });

        waku.createPort(
            "hybrid",
            new draw2d.layout.locator.XYAbsPortLocator({ x: 15, y: -17 })
        );

        icon.add(name, new draw2d.layout.locator.XYRelPortLocator({ x: 95, y: 23 }));
        waku.add(icon, new TopLeftLocator()); // 無かったものを地力で作った
        return waku;
    }
}