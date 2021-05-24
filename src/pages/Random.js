import React, { useState, useEffect } from "react";
import rp from "request-promise";
import cheerio from "cheerio";
import { v4 as uuid4 } from "uuid";
import "../aesthetics/Random.css";

function Random() {
  const [pastas, setPastas] = useState([]);

  useEffect(() => {
    rp(
      "https://secret-ocean-49799.herokuapp.com/https://memesena.com/emoji-pastas/"
    )
      .then((html) => {
        let cPastas = [];
        let $ = cheerio.load(html);

        $(".td-fix-index .container p:not(.copybtn)").each(function (
          i,
          element
        ) {
          let pastaText = $(this).prepend().text();
          let uniqueKey = uuid4().slice(0, 8);
          let pasta = [pastaText, uniqueKey];
          cPastas.push(pasta);
        });

        setPastas(cPastas);
      })
      .catch(function (err) {
        console.log("crawl failed");
      });
  }, []);

  return (
    <div>
      <h1>hmm emoji pasta lele bhai abhi</h1>
      <div className="container">
        {pastas.map((pasta) => {
          return (
            <div className="pastas" key={pasta[1]}>
              <p>
                {pasta[0]}
              </p>
            </div>
          );
        })}
      </div>
      <script>
      </script>
    </div>
  );
}

export default Random;
