/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('award_packages').del()
  await knex('award_packages').insert([
    {
      user_id: 8,
      award_id: 3,
      award_text: '- Appointed by the commander for oversight, administration, guidance & mentorship of non-prior service Amn in trng \n' +
                  '- Evaluates stds of conduct, performance and adjustment to military life while applying add\'l trng/counseling as req\'d \n' +
                  '- Enforces 2 AF/AETC policies/procedures essential to safety, security, & risk mgmt for $3.3M dorm campus/24 rooms \n'+
                  '- Mngs transitional concerns for >250 AD/AFRC/ANG Amn while being awd\'d their 3-lvl as a C-17 APG crew chief',
      comments: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      is_completed: true,
      category: "",
      award_period: "1 JAN - 31 MAR 2022",
      rank_name: "",
      majcom_foa_dru: "",
      dafsc_duty_title: "",
      phone_numbers: "",
      unit_office: "",
      commander_info: ""
    },
    {
      user_id: 8,
      award_id: 15,
      award_text: '- Mng\'d NPS PT prgm; tracked/scheduled fit assessments/loaded 100+ scores in AFFMS--over-dues dn by 98% \n' +
                  '- Guard/Reserve Exodus POC; processed documents via home units for 182 Amn--100% on-time departure/rtrn \n' +
                  '- Org\'d ADPE reallocation/turn-in project; reapportioned unused equip to high need areas--returned $75K to AF \n' +
                  '- Piloted 19 PT sessions for 370 Amn; pinpointed 7 members for remedial trng--mentored 5 w/in stds <30 days \n' +
                  '- Opn\'d/tracked >190 ESD tickets; corrected NPS log-in issues/sec clearance delays--saved AF $250 day/Amn \n' +
                  '- Led T-shift CQ sfty briefings; ensured entry control/customs & courtesies followed--zero unauthorized entries \n' +
                  '- Arranged state flag form; led 50 NPS Airmen in local Mardi Gras parade--praised by City Mayor/TRW CC',
      comments: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      is_completed: false,
      category: "",
      award_period: "",
      rank_name: "",
      majcom_foa_dru: "",
      dafsc_duty_title: "",
      phone_numbers: "",
      unit_office: "",
      commander_info: ""
    },
    {
      user_id: 9,
      award_id: 32,
      award_text: '- Conducted 78 room insps; enforced health/wellness of 82 stdnts, $23M facility maintained; Sq/CC coined E-Flt \n' +
                  '- Inprocessed 83 BMT grads; dedicated 40 hrs instructing Amn on AF/AETC/local stds; equipped for intel trng \n' +
                  '- Supervised 85 formations; ensured 100% accountability of 629 stdnts; key to zero delays in Amn ISR tech trng \n' +
                  '- Managed recruiter assistance prgm; processed 90 applications, w/zero deficiencies; turnover rate boosted 50%',
      comments: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      is_completed: false,
      category: "",
      award_period: "",
      rank_name: "",
      majcom_foa_dru: "",
      dafsc_duty_title: "",
      phone_numbers: "",
      unit_office: "",
      commander_info: ""
    },
    {
      user_id: 9,
      award_id: 3,
      award_text: '- Mentors/supervise/counsels 250 NPS Amn attending DoD\'s only Defense Information School (DINFOS) per yr \n' +
                  '- Develops briefings for all assigned Airmen/enforces strict compliance w/established AF standards/regulations \n' +
                  '- Ensures good order/discipline/monitors Airmen\'s progression through transition pgm and military development \n' +
                  '- Prepares/maintains essential reports and records pertaining to student accountability, training and reassignment',
      comments: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      is_completed: true,
      category: "",
      award_period: "1 OCT - 31 DEC 2021",
      rank_name: "",
      majcom_foa_dru: "",
      dafsc_duty_title: "",
      phone_numbers: "",
      unit_office: "",
      commander_info: ""
    },
    {
      user_id: 9,
      award_id: 17,
      award_text: '- At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti \n' +
                  '- At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti \n' +
                  '- At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti',
      comments: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      is_completed: false,
      category: "",
      award_period: "",
      rank_name: "",
      majcom_foa_dru: "",
      dafsc_duty_title: "",
      phone_numbers: "",
      unit_office: "",
      commander_info: ""
    },
    {
      user_id: 10,
      award_id: 18,
      award_text: '- Revived NCOD pgrm; NCOs/SNCOs/Lts began off-hrs dorm visits...stdnts felt ldrs concern--incidents reduced \n' +
                  '- Briefed 6 CC calls/prepared 6 Airman of the Month boards; 32 NPS Airman recognized--motivated excellence \n' +
                  '- Acquired $5K in QoL items; eqpd rec room w/ games/sport tables-- improved morale/welfare of stdnts beyond reproach',
      comments: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      is_completed: false,
      category: "",
      award_period: "",
      rank_name: "",
      majcom_foa_dru: "",
      dafsc_duty_title: "",
      phone_numbers: "",
      unit_office: "",
      commander_info: ""
    },
    {
      user_id: 10,
      award_id: 4,
      award_text: '- Prepared site for $85K resurfacing proj; mitigated flooding and erosion--improved training & safety conditions \n' +
                  '- Overhauled 240 unserviceable kevlar helmets; installed new retention sys--saved $41.7K in replacement costs \n' +
                  '- Supported "Ice Sheet" heat mitigation prgm; injuries 52% less than previous yr/saved two lives--promoted Sgt',
      comments: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      is_completed: true,
      category: "",
      award_period: "1 JAN - 31 DEC 2021",
      rank_name: "",
      majcom_foa_dru: "",
      dafsc_duty_title: "",
      phone_numbers: "",
      unit_office: "",
      commander_info: ""
    }
  ]);
};
