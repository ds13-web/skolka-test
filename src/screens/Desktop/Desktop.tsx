import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex items-start justify-center px-[30px] py-[60px] bg-[#ffe9dd] w-full min-h-screen">
      <div className="flex flex-col items-center gap-[50px] max-w-[900px] w-full">
        {/* Logo header */}
        <img
          className="w-[144.08px] h-[114.92px]"
          alt="Foxies logo"
          src="/header.svg"
        />

        {/* Main heading */}
        <header className="w-full">
          <h1 className="[font-family:'Abordage-Regular',Helvetica] font-normal text-[#ff804f] text-[50px] text-center leading-normal">
            Lišácký dobrá školka!
          </h1>
        </header>

        {/* Main illustration */}
        <img
          className="min-w-[300px] max-w-[600px] w-full max-h-[330.34px] h-[330px]"
          alt="Children with fox illustration"
          src="/img.svg"
        />

        {/* Description text */}
        <Card className="max-w-[600px] w-full bg-transparent border-none shadow-none">
          <CardContent className="p-1">
            <p className="[font-family:'Abordage-Regular',Helvetica] font-normal text-[#ff804f] text-[25px] text-center leading-[30px]">
              Prihlašte svoje dítě do nové soukromé školky Foxies. Najdete nás
              v moderních prostorech budovy City West, v blízkosti metra linky B
              Stodůlky.
            </p>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <Button className="px-[30px] py-[15px] rounded-[70px] border-2 border-solid border-[#ff804f] bg-transparent hover:bg-[#ff804f] group">
          <span className="[font-family:'Abordage-Regular',Helvetica] font-normal text-[#ff804f] text-xl tracking-[1.00px] whitespace-nowrap leading-none group-hover:text-white">
            VYPLŇTE PŘIHLÁŠKU
          </span>
        </Button>

        {/* Footer */}
        <footer className="flex flex-wrap min-w-[300px] max-w-[900px] items-center justify-center gap-[30px] py-5 w-full">
          {/* Address column */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <div className="[font-family:'Abordage-Regular',Helvetica] font-normal text-[#ff804f] text-[15px] text-center w-[410px]">
                <p>
                  Adresa školky:
                  <br />
                  <br />
                  City West C2, Laurinova 4, 150 00 Praha 13
                  <br />
                  <br />
                </p>
                <a
                  href="https://maps.app.goo.gl/gTkgHF1wxDyQoumN8"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline hover:text-[#e06b3e] transition-colors"
                >
                  zobrazit mapu
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Company details column */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <div className="[font-family:'Abordage-Regular',Helvetica] font-normal text-[#ff804f] text-[15px] text-center w-[410px]">
                <p>
                  Firemní údaje:
                  <br />
                  <br />
                  BEST NANNIES, z.s.,
                  <br />
                  Valentínská 1061/6, Staré Město, <br />
                  110 00 Praha 1<br />
                  IČ: 06698565
                </p>
              </div>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  );
};