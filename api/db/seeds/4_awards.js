/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('awards').del()
  await knex('awards').insert([
    {title: 'Junior Enlisted - Airman/Guardian of the Quarter', description: 'A quarterly award presented to a single outstanding airman/guardian in the junior enlisted tier.', requirements_id: 1},
    {title: 'Junior Enlisted - Airman/Guardian of the Year', description: 'An annual award presented to a single outstanding airman/guardian in the junior enlisted tier.', requirements_id: 1},
    {title: 'NCO - Airman/Guadian of the Quarter', description: 'A quarterly award presented to a single outstanding airman/guardian in the NCO tier.', requirements_id: 2},
    {title: 'NCO - Airman/Guadian of the Year', description: 'An annual award presented to a single outstanding airman/guardian in the NCO tier.', requirements_id: 2},
    {title: 'SNCO - Airman/Guardian of the Quarter', description: 'A quarterly award presented to a single outstanding airman/guardian in the SNCO tier.', requirements_id: 3},
    {title: 'SNCO - Airman/Guardian of the Year', description: 'An annual award presented to a single outstanding airman/guardian in the SNCO tier.', requirements_id: 3},
    {title: 'CGO - Airman/Guardian of the Quarter', description: 'A quarterly award presented to a single outstanding airman/guardian in the CGO tier.', requirements_id: 4},
    {title: 'CGO - Airman/Guardian of the Year', description: 'An annual award presented to a single outstanding airman/guardian in the CGO tier.', requirements_id: 4},
    {title: 'FGO - Airman/Guardian of the Quarter', description: 'A quarterly award presented to a single outstanding airman/guardian in the FGO tier.', requirements_id: 5},
    {title: 'FGO - Airman/Guardian of the Year', description: 'An annual award presented to a single outstanding airman/guardian in the FGO tier.', requirements_id: 5},
    {title: 'First Sergeant of the Year', description: 'This award, established by the Air Force, recognizes the important contributions and leadership qualities exhibited by Air Force members in the First Sergeant Career Field, Special Duty Identifier (SDI) 8F000.', requirements_id: 12},
    {title: 'Honor Guard Annual Award', description: 'An annual award presented to an single airman/guardian who serves in the Honor Guard.', requirements_id: 13},
    {title: 'Information Dominance Award', description: 'An annual award presented to a single airman/guardian for sustained superior performance while providing information dominance and cyberspace operations to the USAF and (or) DoD missions and operations', requirements_id: null},
    {title: 'USAF/USSF Cadet of the Year Award', description: 'Established in 2000, the award recognizes the most outstanding cadet in an Air Force commissioning program.', requirements_id: 14},
    {title: '12 Outstanding Airmen/Guardian of the Year', description: 'Established by the Air Force, this program recognizes 12 enlisted members in a range of grades representing a cross section of career fields.', requirements_id: null},
    {title: 'National Latina Symposiums Meritorious Service Awards', description: 'The National Latina Symposiums Meritorious Service Awards recognize military and civil service women from the National Capitol Region.', requirements_id: 9},
    {title: 'Womens History Month Science, Technology, Engineering and Math (STEM) Role Model Award', description: 'The Womens History Month STEM Role Model Award recognizes military and DoD civilian personnel who have distinguished themselves in the DoD mission, war on terrorism, or whose activities best epitomize the core values of their respective military service or organization.', requirements_id: 6},
    {title: 'National Image, Incorporated Meritorious Service Award', description: 'The National Image, Incorporated Meritorious Service Award honors military service men and women.', requirements_id: null},
    {title: 'League of United Latin American Citizens (LULAC) Excellence in Military Service Awards', description: 'An annual award presented to a single outstanding airman/guardian in the FGO tier.', requirements_id: 9},
    {title: 'National Association for the Advancement of Colored People (NAACP) Roy Wilkins Renown Service Award', description: 'An annual award presented to a single outstanding airman/guardian in the FGO tier.', requirements_id: 7},
    {title: 'Federally Employed Women (FEW) Military Meritorious Service Award', description: 'The FEW Military Meritorious Service Award recognizes an outstanding military service member (Active Duty and Reserve forces) within the Armed Forces who has distinguishes herself/himself with significant contributions to their service, the advancement of women, and our nation.', requirements_id: 6},
    {title: 'FAPAC Military Meritorious Service Award', description: 'The FAPAC Military Meritorious Service Award honors service men and women who have distinguished themselves in the war on terrorism, whose activities best support the ideas of duty, honor, and country, or who best epitomize the core values and the citizen-warrior attributes of their respective military service branch.', requirements_id: 8},
    {title: 'DoD African American History Month Recognition Award', description: 'The DoD African American History Month Recognition Award recognizes and honors military service men and women who have supported the Global War on Terrorism and demonstrates role model qualities and the core values of their respective military service branch.', requirements_id: 7},
    {title: 'Blacks in Government (BIG) Meritorious Service Award', description: 'The BIG Meritorious Service Award is presented to a military member and a DoD civilian employee who have significantly contributed to the Global War on Terrorism through outstanding support to the mission of their organization.', requirements_id: 7},
    {title: 'Wright Brothers Memorial Trophy', description: 'Given annually by the NAA, this award recognizes a civilian or military member for significant public service of enduring value to aviation in the United States.', requirements_id: null},
    {title: 'William T. Pecora Award.', description: 'This award is presented annually to recognize outstanding contributions by individuals or groups toward understanding the earth by means of remote sensing.', requirements_id: null},
    {title: 'Katharine Wright Memorial Award', description: 'The award is made annually to a woman who has: provided encouragement, support, and inspiration to her husband, and thus, was instrumental in his success or made a personal contribution to the advancement of the art, sport, and science of aviation and space flight over an extended period of time.', requirements_id: null},
    {title: 'Air Force Sergeants Association (AFSA) Pitsenbarger Award', description: 'The AFSA recognizes an Air Force enlisted member who has performed a heroic act, on or off duty, which resulted in the saving of life or the prevention of serious injury', requirements_id: null},
    {title: 'The Armed Forces Spirit of Hope Award', description: 'It is awarded to men, women, and organizations of the US Armed Forces, entertainers, and other distinguished Americans and organizations whose patriotism and service reflects that of Mr. Bob Hope.', requirements_id: null},
    {title: 'American Legion Spirit of Service Award', description: 'This award, sponsored by the National Headquarters of the American Legion, is presented annually to an enlisted member from each of the military services for outstanding volunteer service performed off duty in the local community.', requirements_id: 5},
  ]);
};


