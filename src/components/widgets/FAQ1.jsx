import { Icon } from 'astro-icon';
import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "src/assets/icons/CheckArrowIcon";



export const FAQ1 = ({ title, subtitle, highlight, items = [] } ) => {
  return (
    <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="px-4 py-16 mx-auto max-w-6xl lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        {(title || subtitle || highlight) && (
          <div className="max-w-xl mb-10 md:mx-auto md:text-center lg:max-w-2xl md:mb-12">
            {highlight && (
              <p
                className="text-base text-primary dark:text-red-600 font-semibold tracking-wide uppercase"
                dangerouslySetInnerHTML={{ __html: highlight }}
              />
            )}
            {title && (
              <h2
                className="max-w-lg mb-4 text-3xl font-bold leading-none md:tracking-tight sm:text-4xl md:mx-auto font-heading"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {subtitle && (
              <p
                className="max-w-3xl mx-auto text-xl text-muted dark:text-slate-400"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}
          </div>
        )}
      </div>
      <div className="max-w-7xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-x-16 md:grid-cols-2">
          {items &&
            items.map((subitems) => (
              <div className="space-y-8">
                {subitems.map(({ question, answer }) => (
                  <div>
                    <h3 className="mb-4 text-xl font-bold">
                      <Icon name="tabler:arrow-down-right" className="w-7 h-7 text-primary inline-block" />
                      {question}
                    </h3>
                    {answer && (
                      <div
                        className="text-muted dark:text-gray-400"
                        dangerouslySetInnerHTML={{ __html: answer }}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
    </motion.div>
    
  );
};
